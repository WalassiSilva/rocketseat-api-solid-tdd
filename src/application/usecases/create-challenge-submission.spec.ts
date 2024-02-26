import { Challenge } from "../../domain/entities/challenge";
import { Student } from "../../domain/entities/student";
import { InMemoryChallengesRepository } from "../../tests/repositories/in-memory-challenges-repositoriy";
import { InMemoryStudentsRepository } from "../../tests/repositories/in-memory-students-repository";
import { CreateChallengeSubmission } from "./create-challenge-submission";

describe("CreateChallengeSubmission", () => {
  it("should be able to create a new submission", async() => {
    const studentsRepository = new InMemoryStudentsRepository();
    const challengesRepository = new InMemoryChallengesRepository();

    const student = Student.create({
      name: "John Doe",
      email: "q9Yp3@example.com",
    });
    
    const challenge = Challenge.create({
      title: "Challenge 1",
      instructionsUrl: "https://example.com",
    });

    studentsRepository.items.push(student);
    challengesRepository.items.push(challenge);

    const sut = new CreateChallengeSubmission(studentsRepository, challengesRepository);

    const response = await sut.execute({
      studentId: student.id,
      challengeId: challenge.id,
    });

    expect(response).toBeTruthy();
  });
});