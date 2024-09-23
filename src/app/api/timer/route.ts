// file: /app/api/timer/route.ts

const timerState = {
  timeLeft: 300, // Default time in seconds
  isRunning: false,
  endTime: null as number | null, // When the timer is expected to end
};

// GET handler: Fetch the current state of the timer
export async function GET() {
  return new Response(JSON.stringify(timerState), { status: 200 });
}

// POST handler: Start the timer
export async function POST(req: Request) {
  const { action } = await req.json();

  if (action === "start") {
    if (!timerState.isRunning) {
      timerState.isRunning = true;
      timerState.endTime = Date.now() + timerState.timeLeft * 1000;
    }
  } else if (action === "pause") {
    if (timerState.isRunning) {
      const currentTime = Date.now();
      timerState.timeLeft = Math.max(
        Math.floor((timerState.endTime! - currentTime) / 1000),
        0
      );
      timerState.isRunning = false;
      timerState.endTime = null;
    }
  } else if (action === "reset") {
    timerState.timeLeft = 300;
    timerState.isRunning = false;
    timerState.endTime = null;
  }

  console.log("isRunning", timerState.isRunning);

  return new Response(JSON.stringify(timerState), { status: 200 });
}
