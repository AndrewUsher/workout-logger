# Create T3 App

This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with `create-t3-app`.

## What's next? How do I make an app with this?

We try to keep this project as simple as possible, so you can start with just the scaffolding we set up for you, and add additional things later when they become necessary.

If you are not familiar with the different technologies used in this project, please refer to the respective docs. If you still are in the wind, please join our [Discord](https://t3.gg/discord) and ask for help.

- [Next.js](https://nextjs.org)
- [NextAuth.js](https://next-auth.js.org)
- [Prisma](https://prisma.io)
- [Drizzle](https://orm.drizzle.team)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)

## Learn More

To learn more about the [T3 Stack](https://create.t3.gg/), take a look at the following resources:

- [Documentation](https://create.t3.gg/)
- [Learn the T3 Stack](https://create.t3.gg/en/faq#what-learning-resources-are-currently-available) — Check out these awesome tutorials

You can check out the [create-t3-app GitHub repository](https://github.com/t3-oss/create-t3-app) — your feedback and contributions are welcome!

## How do I deploy this?

Follow our deployment guides for [Vercel](https://create.t3.gg/en/deployment/vercel), [Netlify](https://create.t3.gg/en/deployment/netlify) and [Docker](https://create.t3.gg/en/deployment/docker) for more information.

## Database Schema

```mermaid
erDiagram
    User ||--o{ Account : has
    User ||--o{ Session : has
    User ||--o{ Post : creates
    User ||--o{ Workout : performs

    Post {
        Int id PK
        String name
        DateTime createdAt
        DateTime updatedAt
        String createdById FK
    }

    Account {
        String id PK
        String userId FK
        String type
        String provider
        String providerAccountId
        String refresh_token
        String access_token
        Int expires_at
        String token_type
        String scope
        String id_token
        String session_state
    }

    Session {
        String id PK
        String sessionToken
        String userId FK
        DateTime expires
    }

    User {
        String id PK
        String name
        String email
        DateTime emailVerified
        String image
    }

    VerificationToken {
        String identifier
        String token
        DateTime expires
    }

    Workout {
        Int id PK
        Int userId FK
        DateTime date
        Int duration
        DateTime createdAt
        DateTime updatedAt
    }

    Exercise {
        Int id PK
        String name
        String type
        DateTime createdAt
        DateTime updatedAt
    }

    Log {
        Int id PK
        Int workoutId FK
        Int exerciseId FK
        Int sets
        Int reps
        Float weight
        String notes
        DateTime createdAt
        DateTime updatedAt
    }

    Workout ||--o{ Exercise : contains
    Workout ||--o{ Log : has
    Exercise ||--o{ Log : has
```
