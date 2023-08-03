print(
    list(
        map(
            lambda x: int(x.strip()),
            input().replace("[", "").replace("]", "").split(","),
        )
    )[::-1]
)
