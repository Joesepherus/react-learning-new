let timeoutID;
let timeoutIDs = []

function DebouncedButton({ id, onClick, children }) {
  return (
    <button onClick={() => {
      if(timeoutIDs[id]){
        clearTimeout(timeoutIDs[id]);
      }
      timeoutID = setTimeout(() => {
        onClick();
      }, 1000);
      timeoutIDs[id] = timeoutID
    }}>
      {children}
    </button>
  );
}

export default function Dashboard() {
  return (
    <>
      <DebouncedButton
        id={0}
        onClick={() => alert('Spaceship launched!')}
      >
        Launch the spaceship
      </DebouncedButton>
      <DebouncedButton
        id={1}
        onClick={() => alert('Soup boiled!')}
      >
        Boil the soup
      </DebouncedButton>
      <DebouncedButton
        id={2}
        onClick={() => alert('Lullaby sung!')}
      >
        Sing a lullaby
      </DebouncedButton>
    </>
  )
}
