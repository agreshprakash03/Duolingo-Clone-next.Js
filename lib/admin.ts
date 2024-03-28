import { auth } from "@clerk/nextjs"

const adminIds = [
  "user_2doK8pmk8fpYju1YyrMPjHAqHFt",
];

export const isAdmin = () => {
  const { userId } = auth();

  if (!userId) {
    return false;
  }

  return adminIds.indexOf(userId) !== -1;
};