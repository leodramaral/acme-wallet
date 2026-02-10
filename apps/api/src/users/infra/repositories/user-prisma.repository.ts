import { Injectable } from "@nestjs/common";
import { User } from "src/users/domain/entities/user.entity";
import { IUserRepository } from "src/users/domain/repositories/user.repository";
import { prisma } from "@repo/db";

@Injectable()
export class UserPrismaRepository implements IUserRepository {
    async save(user: User): Promise<{ id: string; }> {
        const result = await prisma.user.create({
            data: {
                id: user.id,
                name: user.name,
                email: user.email,
            },
        });

        return {
            id: result.id,
        };
    }
}
