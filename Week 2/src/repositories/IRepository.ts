// src/repositories/IRepository.ts
import { IIdentifiable } from '../models/IIdentifiable'

export interface IRepository<T extends IIdentifiable> {
  add(item: T): void
  update(id: string, data: Partial<T>): void
  findById(id: string): T | undefined
  findAll(): T[]
}
