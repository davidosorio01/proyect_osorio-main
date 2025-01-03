import { sqliteTable, AnySQLiteColumn, integer, text, foreignKey, numeric } from "drizzle-orm/sqlite-core"
  import { sql } from "drizzle-orm"

export const player = sqliteTable("player", {
	id: integer("id").primaryKey().notNull(),
	nombre: text("nombre").notNull(),
	grado: text("grado"),
	userId: integer("user_id"),
});

export const equipos = sqliteTable("equipos", {
	id: integer("id").primaryKey(),
	nombre: text("nombre").notNull(),
	grado: text("grado").notNull(),
});

export const torneos = sqliteTable("torneos", {
	id: integer("id").primaryKey(),
	inicioTorneo: integer("inicio_torneo"),
	finalTorneo: integer("final_torneo"),
	nombre: text("nombre").notNull(),
});

export const equiposTorneo = sqliteTable("equipos_torneo", {
	torneoId: integer("torneo_id").references(() => torneos.id),
	equipo1: integer("equipo_1").references(() => equipos.id),
	equipo2: integer("equipo_2").references(() => equipos.id),
	marcador1: integer("marcador_1"),
	marcador2: integer("marcador_2"),
	fechaPartido: text("fecha_partido").notNull(),
});

export const partidos = sqliteTable("partidos", {
	idPlayer: integer("id_player").references(() => player.id),
	idEquipos: integer("id_equipos").references(() => equipos.id),
});

export const usuarios = sqliteTable("usuarios", {
	id: integer("id").primaryKey({ autoIncrement: true }),
	nombres: text("nombres").notNull(),
	apellidos: text("apellidos").notNull(),
	nacimiento: numeric("nacimiento"),
	email: text("email").notNull(),
	passwordHash: text("password_hash").notNull(),
	token: text("token"),
});

export const buzon = sqliteTable("buzon", {
	id: integer("id").primaryKey({ autoIncrement: true }),
	nombre: text("nombre").notNull(),
	correo: text("correo").notNull(),
	mensaje: text("mensaje").notNull(),
});