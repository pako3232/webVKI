import sqlite3 from "sqlite3"

import type StudentInterface from "@/types/StudentsInterface"
import { group } from "console"

sqlite3.verbose()

export const getStudentsDb = async (): Promise<StudentInterface[]> => {
    const db = new sqlite3.Database(process.env.DB ?? './db/vki-web.db')

    const students = await new Promise((resolve, reject) => {
        const sql = `SELECT
                        s.id,
                        s.first_name,
                        s.last_name,
                        s.middle_name,
                        s.groupId,
                        c.name as groupName
                    FROM
                        student s
                    LEFT JOIN
                        class c
                    ON
                        s.groupId = c.id;`
        db.all(sql, [], (err, rows) => {
            if (err) {
                reject(err)
                db.close()
                return
            }
            resolve(rows)
            db.close()
        })
    })

    return students as StudentInterface[];
}