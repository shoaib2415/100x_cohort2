import { atom, selector } from "recoil";

/*
export const networkAtom = atom({
  key: "networkAtom",
  default: 20,
});

export const jobsAtom = atom({
  key: "jobsAtom",
  default: 10,
});

export const messagesAtom = atom({
  key: "messagesAtom",
  default: 12,
});

export const notificationsAtom = atom({
  key: "notificationsAtom",
  default: 23,
});

export const totalSelector = selector({
  key: "totalSelector",
  get: ({ get }) => {
    const network = get(networkAtom);
    const jobs = get(jobsAtom);
    const messages = get(messagesAtom);
    const notifications = get(notificationsAtom);
    return network + jobs + messages + notifications;
  },
});
*/
import axios from "axios";
export const notificationAtom = atom({
  key: "notifications",
  default: selector({
    key: "networkAtomSelector",
    get: async () => {
      const res = await axios.get(
        "https://sum-server.100xdevs.com/notifications"
      );
      return res.data;
    },
  }),
});

export const totalSelector = selector({
  key: "totalSelector",
  get: ({ get }) => {
    const allNotifications = get(notificationAtom);
    return (
      allNotifications.network +
      allNotifications.jobs +
      allNotifications.messaging +
      allNotifications.notifications
    );
  },
});
