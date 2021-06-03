import { Kafka, logLevel } from 'kafkajs';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

const kafka = new Kafka({
    clientId: 'api',
    brokers: ['localhost:9092'],
    logLevel: logLevel.WARN,
    retry: {
      initialRetryTime: 300,
      retries: 10
    },
});

const topic = 'creteUser';
const producer = kafka.producer();
const consumer = kafka.consumer({ groupId: 'message' });

const consumeMessage = async () => {
    await consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        const prefix = `${topic}[${partition} | ${message.offset}] / ${message.timestamp}`;

        const usersRepository = new UsersRepository();
        const user = JSON.parse(message.value);
        
        usersRepository.create(user);
        console.log(`- ${prefix} #${message.value}`);
      },
    });
}

const coonectKafka = async () => {
    await producer.connect();
    await consumer.connect();
    await consumer.subscribe({ topic });
}


export { producer, coonectKafka, consumeMessage }