import { fakeRequest } from "../../utils/httpClient";
import {
  getHttpStatus,
  HttpStatus,
  MetaResponseType,
} from "@/@types/requestType";

describe("fakeRequest", () => {
  it("deve retornar os dados corretos", async () => {
    const data = { message: "Teste" };

    const response = await fakeRequest({ data });

    expect(response.data).toEqual(data);
    expect(response.status).toBe(HttpStatus.OK);
    expect(response.statusText).toBe("OK");
  });

  it("deve retornar um status HTTP customizado", async () => {
    const status = HttpStatus.NOT_FOUND;

    const response = await fakeRequest({ data: {}, status });

    expect(response.status).toBe(status);
    expect(response.statusText).toBe(getHttpStatus(status));
  });

  it("deve incluir os metadados corretamente", async () => {
    const meta: MetaResponseType = {
      requestTime: "2025-03-24T12:00:00Z",
      executionTime: 120,
      pagination: { total: 100, perPage: 10, currentPage: 1, totalPages: 10 },
    };

    const response = await fakeRequest({ data: {}, meta });

    expect(response.meta).toEqual(meta);
  });

  it("deve respeitar o tempo de espera", async () => {
    const start = Date.now();
    const time = 1000;

    await fakeRequest({ data: {}, time });

    const duration = Date.now() - start;
    expect(duration).toBeGreaterThanOrEqual(time);
  });

  it("deve retornar um array de dados corretamente", async () => {
    const data = ["item1", "item2"];

    const response = await fakeRequest({ data });

    expect(response.data).toEqual(data);
  });
});
