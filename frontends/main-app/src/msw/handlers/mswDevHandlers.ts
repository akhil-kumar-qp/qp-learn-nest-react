import { HttpResponse, http } from "msw";
import { userMockDb } from "../mockDbs/userMockDb";
import type { IUser } from "../../types/IUser";
import { API_BASE_URL } from "../../constants/appConstants";

const sendResponse = <T>(res: T): HttpResponse<{ data: T }> => {
  return HttpResponse.json({ data: res });
};

export const mswDevHandlers = [
  http.get(`${API_BASE_URL}user`, () => {
    const user = userMockDb.getUser();
    return sendResponse<IUser>(user);
  }),
];
