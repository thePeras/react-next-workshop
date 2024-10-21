const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    const resource1 = await prisma.resource.create({
        data: {
            title: 'Moodle UP 24/25',
            description: 'O Moodle UP 24/25 é a plataforma de e-learning da Universidade do Porto.',
            thumbnail: 'https://moodle2425.up.pt/theme/image.php/boost4uporto/theme/1729005794/frontpage/fpimg-01',
            url: 'https://moodle2425.up.pt/',
        },
    });

    console.log('Resource 1 created:', resource1);

    const resource2 = await prisma.resource.create({
        data: {
            title: 'ChatGPT',
            description: 'ChatGPT is a platform that allows you to create chatbots using OpenAI\'s GPT-3.',
            thumbnail: null,
            url: 'https://chat.openai.com',
        },
    });

    console.log('Resource 2 created:', resource2);
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
