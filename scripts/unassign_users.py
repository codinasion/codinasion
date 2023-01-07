import datetime
import requests

def unassign_contributor(repo_owner, repo_name, username):
  # Set the API endpoint URL
  api_url = f"https://api.github.com/repos/{repo_owner}/{repo_name}/assignees/{username}"

  # Set the authentication header
  headers = {
      "Authorization": "Bearer <TOKEN>"
  }

  # Send a DELETE request to the API endpoint to unassign the user
  response = requests.delete(api_url, headers=headers)

  # Check the status code of the response
  if response.status_code == 204:
    print(f"Successfully unassigned {username} from {repo_name}")
  else:
    print(f"Error unassigning {username} from {repo_name}: {response.text}")

# defining unassign function
def unassign_stale_good_first_issues():
      # Get current time
  current_time = datetime.datetime.now()

  # Find all good first issues that were assigned more than a month ago
  stale_issues = []
  for issue in good_first_issues:
    if issue.assigned_at < current_time - datetime.timedelta(days=30):
      stale_issues.append(issue)

  # Unassign all stale issues
  for issue in stale_issues:
    issue.unassign_contributor()
