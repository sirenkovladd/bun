// @ts-nocheck
import {
  ServerResponse,
} from "node:http";
import { createTest } from "node-harness";
const { expect, createDoneDotAll } = createTest(import.meta.path);

console.log('Start aksd;askd;laskd;alskda;skd;askdas;ldkalskdaksd;laskd;als');
test("ServerResponse reply", done => {
  const createDone = createDoneDotAll(done);
  const doneRequest = createDone();
  try {
    const req = {};
    const sendedText = "Bun\n";
    const res = new ServerResponse(req, async (res: Response) => {
      expect(await res.text()).toBe(sendedText);
      doneRequest();
    });
    res.write(sendedText);
    res.end();
  } catch (err) {
    doneRequest(err);
  }
});
