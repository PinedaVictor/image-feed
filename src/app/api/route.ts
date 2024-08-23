"use server";
/**
 *
 * @param request /
 * @returns JSON: {sup: true}
 * Sample route using nextjs
 */
export async function GET(request: Request) {
  return Response.json({ sup: true });
}
