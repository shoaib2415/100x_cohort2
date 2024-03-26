/*
import "./App.css";
import {
  networkAtom,
  jobsAtom,
  messagesAtom,
  notificationsAtom,
  totalSelector,
} from "../stores/atoms/atoms";
import { useRecoilValue, RecoilRoot } from "recoil";
function App() {
  return (
    <RecoilRoot>
      <Main />
    </RecoilRoot>
  );
}
function Main() {
  const network = useRecoilValue(networkAtom);
  const jobs = useRecoilValue(jobsAtom);
  const messages = useRecoilValue(messagesAtom);
  const notifications = useRecoilValue(notificationsAtom);
  const total = useRecoilValue(totalSelector);
  return (
    <div>
      <button>Home</button>
      <button>My network ({network})</button>
      <button>Jobs ({jobs})</button>
      <button>Messaging ({messages})</button>
      <button>Notifications ({notifications})</button>
      <button>Me ({total})</button>
    </div>
  );
}
export default App;
*/

import { notificationAtom, totalSelector } from "../stores/atoms/atoms";

import { useRecoilState, RecoilRoot, useRecoilValue } from "recoil";
function App() {
  return (
    <RecoilRoot>
      <Main />
    </RecoilRoot>
  );
}
function Main() {
  const [notification] = useRecoilState(notificationAtom);
  console.log(notification);
  const total = useRecoilValue(totalSelector);

  return (
    <div>
      <button>Home</button>
      <button>My network ({notification.network})</button>
      <button>Jobs ({notification.jobs})</button>
      <button>Messaging ({notification.messages})</button>
      <button>Notifications ({notification.notifications})</button>
      <button>Me ({total})</button>
    </div>
  );
}
export default App;
