import fetch from "node-fetch";

export default async function autoAssignIssue(
  OWNER,
  REPO,
  TOKEN,
  ISSUE_NUMBER,
  USERNAME
) {
  // get issue data
  const issueData = await fetch(
    `https://api.github.com/repos/${OWNER}/${REPO}/issues/${ISSUE_NUMBER}`,
    {
      method: "GET",
      headers: {
        Authorization: `token ${TOKEN}`,
      },
    }
  )
    .then((res) => res.json())
    .catch((err) => console.log("err => ", err));
  await console.log("issueData => ", issueData);

  const labels = issueData.labels.map((item) => item.name);
  await console.log("labels => ", labels);

  // check if issue contains 'good first issue' label
  if (labels.includes("good first issue")) {
    // check if issue is assigned to someone
    if (issueData.assignee) {
      // create comment
      const response = await fetch(
        `https://api.github.com/repos/${OWNER}/${REPO}/issues/${ISSUE_NUMBER}/comments`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `token ${TOKEN}`,
          },
          body: JSON.stringify({
            body: `Hey @${USERNAME}, this issue is already assigned to @${issueData.assignee.login} !!!
          
Please choose another issue.

Thanks for your interest in contributing to this project.`,
          }),
        }
      )
        .then((res) => res.json())
        .catch((err) => console.log("err => ", err));
      await console.log("response => ", response);
    } else {
      // // find all the issues assigned to the user
      // const issuesAssignedToUser = await fetch(
      //   `https://api.github.com/search/issues?q=assignee:${USERNAME}+repo:${OWNER}/${REPO}+type:issue+label:"good first issue"`,
      //   {
      //     method: "GET",
      //     headers: {
      //       Authorization: `token ${TOKEN}`,
      //     },
      //   }
      // )
      //   .then((res) => res.json())
      //   .catch((err) => console.log("err => ", err));

      // const assignmentCount = issuesAssignedToUser.total_count;

      // if (assignmentCount < 21) {
      // assign issue
      const response = await fetch(
        `https://api.github.com/repos/${OWNER}/${REPO}/issues/${ISSUE_NUMBER}/assignees`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `token ${TOKEN}`,
          },
          body: JSON.stringify({
            assignees: [USERNAME],
          }),
        }
      )
        .then((res) => res.json())
        .catch((err) => console.log("err => ", err));
      await console.log("response => ", response);
      //       } else {
      //         // create comment
      //         const response = await fetch(
      //           `https://api.github.com/repos/${OWNER}/${REPO}/issues/${ISSUE_NUMBER}/comments`,
      //           {
      //             method: "POST",
      //             headers: {
      //               "Content-Type": "application/json",
      //               Authorization: `token ${TOKEN}`,
      //             },
      //             body: JSON.stringify({
      //               body: `Hey @${USERNAME}

      // Sorry but the assignment limit has been set to 20 issues per user.

      // These limits are set to ensure everyone gets a chance to contribute to Hacktoberfest.

      // These limits will be lifted after 31st October.

      // Thank you very much for contributing to this project.
      // `,
      //             }),
      //           }
      //         )
      //           .then((res) => res.json())
      //           .catch((err) => console.log("err => ", err));
      //         await console.log("response => ", response);
      //       }
    }
  } else {
    // create comment
    const response = await fetch(
      `https://api.github.com/repos/${OWNER}/${REPO}/issues/${ISSUE_NUMBER}/comments`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `token ${TOKEN}`,
        },
        body: JSON.stringify({
          body: `Hey @${USERNAME}, \`!assign\` command is only for \`good first issue\` !!!

Please choose another issue.

Thanks for your interest in contributing to this project.`,
        }),
      }
    )
      .then((res) => res.json())
      .catch((err) => console.log("err => ", err));
    await console.log("response => ", response);
  }
}
