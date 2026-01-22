# Pasos para levantar el proyecto

1) Levantar la BDD
docker compose up -d
2) Renombrar el .env.template a .env
3) Reemplazar las variables de entorno
4) Ejecutar el SEED para [crear la base de datos local](http://localhost:3000/api/seed)

## Nota
__usuario:__ test@gmail.com
__password:__ 123456

# Prisma commands
npx prisma init
npx prisma migrate dev
npx prisma generate
