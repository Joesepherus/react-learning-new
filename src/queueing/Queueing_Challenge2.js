export function getFinalState(baseState, queue) {
  console.log("baseState: ", baseState);
  console.log("queue: ", queue);
  let finalState = baseState;

  // TODO: do something with the queue...
  for (let i = 0; i < queue.length; i++) {
    if (isNaN(queue[i])) {
      finalState = queue[i](finalState);
    } else {
      finalState = queue[i];
    }
  }
  return finalState;
}

function increment(n) {
  return n + 1;
}
increment.toString = () => "n => n+1";

export default function App() {
  return (
    <>
      <TestCase baseState={0} queue={[1, 1, 1]} expected={1} />
      <hr />
      <TestCase
        baseState={0}
        queue={[increment, increment, increment]}
        expected={3}
      />
      <hr />
      <TestCase baseState={0} queue={[5, increment]} expected={6} />
      <hr />
      <TestCase baseState={0} queue={[5, increment, 42]} expected={42} />
    </>
  );
}

function TestCase({ baseState, queue, expected }) {
  const actual = getFinalState(baseState, queue);
  return (
    <>
      <p>
        Base state: <b>{baseState}</b>
      </p>
      <p>
        Queue: <b>[{queue.join(", ")}]</b>
      </p>
      <p>
        Expected result: <b>{expected}</b>
      </p>
      <p
        style={{
          color: actual === expected ? "green" : "red",
        }}
      >
        Your result: <b>{actual}</b> (
        {actual === expected ? "correct" : "wrong"})
      </p>
    </>
  );
}
