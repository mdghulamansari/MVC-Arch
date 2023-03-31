import supertest from "supertest";
import app from "../utils/server";

describe("Student", () => {
  describe("Students List", () => {
    it("should return a 409 error", async () => {
      const { statusCode, body } = await supertest(app).get("/student").send();
      expect(statusCode).toEqual(200);
      expect(body.msg).toEqual("success");
    });
  });

  describe("Get a student of id", () => {
    it("should return a 409 error", async () => {
      const id = "4c855f8e-0ae9-4b66-a5b4-3c7018f48cc6";
      const { statusCode, body } = await supertest(app)
        .get(`/student/${id}`)
        .send();
      expect(statusCode).toEqual(200);
      expect(body.msg).toEqual("success");
      expect(body.data).toEqual({
        id: "4c855f8e-0ae9-4b66-a5b4-3c7018f48cc6",
        name: "Ghulam",
        age: 24,
        gender: "Male",
        createdAt: "2023-03-30T12:50:34.564Z",
        updatedAt: "2023-03-30T12:50:34.564Z",
      });
    });
  });

  describe("Student creation", () => {
    it("should return a 409 error", async () => {
      const { statusCode, body } = await supertest(app).post(`/student`).send({
        name: "Ghulam",
        age: 24,
        gender: "Male",
      });
      expect(statusCode).toEqual(201);
      expect(body.msg).toEqual("created");
    });
  });

  describe("update Student", () => {
    it("should return a 409 error", async () => {
      const id = "4c855f8e-0ae9-4b66-a5b4-3c7018f48cc6";
      const { statusCode, body } = await supertest(app)
        .put(`/student/${id}`)
        .send({
          name: "Ghulam",
          age: 24,
          gender: "Male",
        });
      expect(statusCode).toEqual(200);
      expect(body.msg).toEqual("success");
    });
  });
});
