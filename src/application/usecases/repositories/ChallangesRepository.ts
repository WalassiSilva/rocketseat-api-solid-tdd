import { Challenge } from "../../../domain/entities/challenge"


export interface ChallangesRepository {
  findById(id: string): Promise<Challenge | null>
};