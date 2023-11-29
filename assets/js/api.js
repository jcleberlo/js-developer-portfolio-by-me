async function fetchProfileData() {
    const url = "https://raw.githubusercontent.com/jcleberlo/js-developer-portfolio-by-me/main/data/profile.json"
    const fetching = await fetch(url)
    return await fetching.json()
}