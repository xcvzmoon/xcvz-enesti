export default defineEventHandler(async (event) => {
  const stream = createEventStream(event);
  const interval = setInterval(() => {
    stream.push(
      JSON.stringify({
        database: 'no database detected',
        status: 'ok',
        uptime: process.uptime(),
        timestamp: new Date().toISOString(),
      }),
    );
  }, 5_000);

  stream.onClosed(() => clearInterval(interval));

  return stream.send();
});
