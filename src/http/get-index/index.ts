export async function handler(req: object) {
  return {
    statusCode: 200,
    body: JSON.stringify({ ok: true, req }),
  };
}
