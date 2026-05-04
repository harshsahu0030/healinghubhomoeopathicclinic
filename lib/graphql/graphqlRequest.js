export default async function graphqlRequest(query) {
  const url = "https://content.healinghubhomoeopathicclinic.com/graphql";
  const headers = { "Content-Type": "application/json" };

  const res = await fetch(url, {
    headers,
    method: "POST",
    body: JSON.stringify(query),
    next: { revalidate: 3600 },
  });

  const resJson = await res.json();
  return resJson;
}
