import json
import requests


def fetch_tools(tools_data):
    # Fetch npm packages from npm registry
    print("🔗 Fetching npm packages from npm registry...")
    response = requests.get(
        "https://registry.npmjs.org/-/user/codinasion/package",
        timeout=60,
    )
    data = response.json()
    packages = list(data.keys())
    print("✅ Total packages fetched: " + str(len(packages)))
    print("")

    # Write npm packages to tools.json
    print("🖊️  Writing npm packages to tools.json...")
    for package in packages:
        package = package.replace("@codinasion/", "")
        if not any(package == tool["name"] for tool in tools_data):
            # Add package to tools.json
            tools_data.append({"name": package, "ignore": False, "tags": []})
    print("✅ Total packages in tools.json: " + str(len(tools_data)))
    print("")

    # Write tools.json
    print("🖊️  Writing tools.json...")
    # Sort tools.json by name
    tools_data = sorted(tools_data, key=lambda k: k["name"])
    with open(
        "../website/src/app/(PRIVATE)/tools/_components/tools.json",
        "w",
        encoding="utf-8",
    ) as f:
        json.dump(tools_data, f, ensure_ascii=False, indent=2)
        f.write("\n")
    print("✅ tools.json written")
    print("")
