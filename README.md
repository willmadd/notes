# Notes

## Setup Instructions

1) ### Clone Repo
    In the terminal, clone the notes repo. 
    `git clone https://www.github.com/willmadd/notes.git`
    then `cd notes/`

2) ### Install 'Notes'
    Run `composer install` followed by `npm install` followed by `npm run production`

3) ### Configure Laravel
    In the project root, rename the file `.env.example` to `.env`
    ####
    In the `.env` file, find the database configuration and add your database connection details eg: (you may need ot create a database first). e.g.

        DB_CONNECTION=mysql
        DB_HOST=127.0.0.1
        DB_PORT=3306 
        DB_DATABASE=notes 
        DB_USERNAME=root
        DB_PASSWORD=root

    run `php artisan key:generate` followed by `php artisan serve`
    ####
    finally run `php artisan migrate` to create the database tables
    ####
    You should now see a the 'Notes' App. If you just see a spinning 6b it's probably because your database credentials are incorrect!