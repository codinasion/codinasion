import datetime
import requests
import time
import os
import sys

REPO_OWNER = "codinasion"
REPO_NAME = "program"

# Get REPO_TOKEN from command line
if len(sys.argv) > 1:
    REPO_TOKEN = sys.argv[1]
else:
    raise Exception("REPO_TOKEN is required")


# GET all 'good first issues'
issues = []
page = 1
while True:
    print(f"Fetching page {page}...")
    issue_url = f"https://api.github.com/repos/{REPO_OWNER}/{REPO_NAME}/issues?labels=good%20first%20issue&state=open&per_page=100&page={page}"
    issue_data_response = requests.get(
        issue_url, headers={"Authorization": f"Bearer {REPO_TOKEN}"}
    )

    if issue_data_response.status_code == 200:
        issue_data = issue_data_response.json()
        issues.extend(issue_data)
        if len(issue_data) < 100:
            break
        page += 1
    else:
        print("Error while fetch 'good first issue'")
        print(f"Status Code : {issue_data_response.status_code}")
        break

    # Wait for few seconds to prevent Github API secondary rate limit
    time.sleep(3)
print(f"Total issues fetched: {len(issues)}")


for issue in issues:
    # Check if the issue has assignees
    if issue.get("assignees"):
        print("It has assignees !!!")
        issue_number = issue.get("number")

        # GET issue events
        events_url = f"https://api.github.com/repos/{REPO_OWNER}/{REPO_NAME}/issues/{issue_number}/events"
        events_data_response = requests.get(
            events_url, headers={"Authorization": f"Bearer {REPO_TOKEN}"}
        )

        if events_data_response.status_code == 200:
            events_data = events_data_response.json()

            # Get the latest assigned event
            assignment_events = [
                event for event in events_data if event["event"] == "assigned"
            ]
            assignment_events = sorted(
                assignment_events,
                key=lambda event: datetime.datetime.strptime(
                    event["created_at"], "%Y-%m-%dT%H:%M:%SZ"
                ),
                reverse=True,
            )

            # Get the latest assignment event
            latest_assignment_event = (
                assignment_events[0] if assignment_events else None
            )

            if latest_assignment_event:
                assignment_time = latest_assignment_event["created_at"]
                print(f"Assignment Time: {assignment_time}")

                elapsed_time = datetime.datetime.now() - datetime.datetime.strptime(
                    assignment_time, "%Y-%m-%dT%H:%M:%SZ"
                )

                # Check if the issue is assigned for more than 15 days
                if elapsed_time.days > 15:
                    print("Issue is assigned for more than 15 days !!!")

                    unassign_url = f"https://api.github.com/repos/{REPO_OWNER}/{REPO_NAME}/issues/{issue_number}/assignees"
                    unassign_response = requests.delete(
                        unassign_url,
                        headers={"Authorization": f"Bearer {REPO_TOKEN}"},
                        json={"assignees": [latest_assignment_event["actor"]["login"]]},
                    )

                    # Wait for few seconds to prevent Github API secondary rate limit
                    time.sleep(3)

                    if unassign_response.status_code == 200:
                        print(
                            f"Unassigned @{latest_assignment_event['actor']['login']} successfully !!!"
                        )

                        # Don't notify users unnecessarily
                        # # Comment on the Issue about the Unassignment
                        # comment_url = f"https://api.github.com/repos/{REPO_OWNER}/{REPO_NAME}/issues/{issue_number}/comments"
                        # comment_response = requests.post(
                        #     comment_url,
                        #     headers={"Authorization": f"Bearer {REPO_TOKEN}"},
                        #     json={
                        #         "body": f"""Hey @{latest_assignment_event['actor']['login']},\n\nThis issue has been assigned to you for more than 15 days.\n\nWe are unassigning you from this issue.\n\nIf you are still interested in contributing to this issue, please get auto-assigned on the issue by commenting `!assign` again.\n\nThanks for your contributions :)"""
                        #     },
                        # )

                        # if comment_response.status_code == 201:
                        #     print("Commented successfully !!!")
                        # else:
                        #     print("Error while commenting !!!")
                    else:
                        print("Error while unassigning !!!")

        else:
            print("Error while fetching events data !!!")
            print(f"Status Code: {events_data_response.status_code}")
            break

        # Wait for few seconds to prevent Github API secondary rate limit
        time.sleep(3)

# Contributed by: @patel-aum
