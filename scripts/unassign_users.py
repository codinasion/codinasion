import datetime
import requests
from pprint import pprint

repo_owner= "codinasion"
repo_name = "program"

# Make a GET request to get all good-first-issues
url = f"https://api.github.com/repos/{repo_owner}/{repo_name}/issues?labels=good%20first%20issue"
issues = requests.get(url).json()

for i in issues:
    # Check if the issue has assignees
    if i.get("assignees"):
        issue_number = i.get("number")
        # Make a GET request to get issue events
        url = f"https://api.github.com/repos/{repo_owner}/{repo_name}/issues/{issue_number}/events"
        issue_events = requests.get(url).json()
        assigned_events = [event for event in issue_events if event["event"]=="assigned"]
        assigned_events = sorted(assigned_events, key=lambda event: datetime.datetime.strptime(event["created_at"],"%Y-%m-%dT%H:%M:%SZ"),reverse=True)
        latest_assigned_event = assigned_events[0] if assigned_events else None
        if latest_assigned_event:
            created_at = datetime.datetime.strptime(latest_assigned_event["created_at"],"%Y-%m-%dT%H:%M:%SZ")
            elapsed_time = datetime.datetime.utcnow() - created_at
            #To check how many days elapsed
            # pprint(elapsed_time)

            # Check if the elapsed time is greater than 30 days
            if elapsed_time.days > 30:
                headers = {"Authorization": "Bearer {YOUR_TOKEN}"}
                data = {"assignees": []}
                url = f"https://api.github.com/repos/{repo_owner}/{repo_name}/issues/{issue_number}"
                response = requests.patch(url, headers=headers, json=data)
                print(response.status_code)
                #if 200 then Succesfull
