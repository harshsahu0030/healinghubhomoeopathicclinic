export async function getTestimonials() {
  try {
    const res = await fetch(
      `https://content.healinghubhomoeopathicclinic.com/wp-json/wp/v2/testimonial`,
      {
        next: { revalidate: 60 },
        method: "GET",
      },
    );

    if (!res.ok) {
      throw new Error(`Failed: ${res.status}`);
    }

    const data = await res.json();
    return data || [];
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    return [];
  }
}
