import EventSourcing from './EventSourcing';
import LongPulling from './LongPulling';
import WebSock from './WebSock';

function App() {
  return (
    <div className="App">
      <WebSock />
        {/* <EventSourcing /> */}
        {/* <LongPulling /> */}
    </div>
  );
}

export default App;
