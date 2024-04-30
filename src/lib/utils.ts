import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { faker } from "@faker-js/faker";
import { Member } from "../app/admin/members/columns";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function createRandomMember(): Member {
  return {
    id: faker.number.int(),
    uid: faker.string.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    phone: faker.phone.number(),
  };
}

