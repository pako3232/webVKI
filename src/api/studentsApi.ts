import type StudentInterface from "@/types/StudentsInterface";

export const GetStudentsApi = async (): Promise<StudentInterface[]> => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API}students`);

        if (!response.ok) {
            throw new Error(`Ошибка HTTP: ${response.status}${response.statusText}`)
        }
        const students = await response.json() as StudentInterface[]
        return students
    }
    catch (err) {
        console.log('>>> getStudentsApi', err)
        return [] as StudentInterface[]
    }
}