"use server";

export async function incrementOnServer(count: number): Promise<number> {
    "use server"; // Explicitly mark this as a server function

    return new Promise((resolve) => {
        setTimeout(() => resolve(count + 1), 500);
    });
}
