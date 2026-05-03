export async function getTreatments() {
  try {
    const res = await fetch(
      `https://content.healinghubhomoeopathicclinic.com/wp-json/wp/v2/treatment?per_page=20&orderby=title&order=asc`,
      {
        method: "GET",
        next: { revalidate: 60 },
      },
    );

    if (!res.ok) {
      throw new Error(`Failed: ${res.status}`);
    }

    const data = await res.json();
    return data || [];
  } catch (error) {
    console.error("Error fetching treatments:", error);
    return [];
  }
}

export async function getSingleTreatment({ slug }) {
  try {
    const res = await fetch(
      `https://content.healinghubhomoeopathicclinic.com/wp-json/wp/v2/treatment?slug=${slug}`,
      {
        method: "GET",
        next: { revalidate: 60 },
      },
    );

    if (!res.ok) {
      throw new Error(`Failed: ${res.status}`);
    }

    const data = await res.json();
    return data || [];
  } catch (error) {
    console.error("Error fetching treatments:", error);
    return [];
  }
}
