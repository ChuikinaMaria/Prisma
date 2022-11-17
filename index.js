import { PrismaClient, User } from '@prisma/client';

const prisma = new PrismaClient();

class App {
	async init() {
		await prisma.$connect();
		await prisma.user.findFirst({ where: { id: 1 } });

	}
}

const app = new App();
app.init();