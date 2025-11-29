# Example website project for a game with an API and database stats

## Prerequisites

This project uses `pnpm` for package management.

To install `pnpm`:

```bash
npm install -g pnpm
```

## Supabase Setup

To manage the database, you will need the Supabase CLI.

1.  **Install the Supabase CLI**:

    Follow the installation guide but only for the installation step from
    [here](https://supabase.com/docs/guides/local-development/cli/getting-started?queryGroups=platform&platform=windows)

2.  **Login to Supabase**:

    ```bash
    supabase login
    ```

    This will open your browser to authenticate.

3.  **Select your Project**:
    Link your local environment to your remote Supabase project:

    ```bash
    supabase link
    ```

    You can find your project ID in the Supabase dashboard settings.

4.  **Setup the local environment**:

    Set your supabase project variables in a `.env` file in the `website` folder. You can copy from the `.env.example` file and fill in the values.

5.  **Generate Supabase Types**:

    To generate the Supabase types, run the following command in the `website` folder:

    ```bash
    pnpm supabase-types
    ```

## Start the local server

To start the local development server, run:

```bash
pnpm dev
```

## Netlify Setup

1.  **Connect to Git Repository**:

    In your Netlify dashboard, create a new site and connect it to your Git repository.

2.  **Set the Environment Variables**:

    In the Netlify site settings, add the same environment variables as in your `.env` file.

## Deploy to Netlify

To deploy the website to Netlify, push your changes to the main branch. Netlify will automatically build and deploy the site

## Updating Supabase Types

Whenever you make changes to the database schema, remember to regenerate the Supabase types by running:

```bash
pnpm supabase-types
```
