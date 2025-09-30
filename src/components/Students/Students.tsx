'use client';

import useStudents from '@/hooks/useStudents';
import type StudentInterface from '@/types/StudentsInterface';
import styles from './Students.module.scss';

const Students = (): React.ReactElement => {
    const { students } = useStudents();

    return (
        <div className={styles.Students}>
            <table>
                <tr>
                    <td>ФИО</td>
                    <td>Группа</td>
                </tr>
                {students.map((student: StudentInterface) => (
                    <tr>
                        <td key={student.id}>
                            {`${student.first_name} ${student.last_name} ${student.middle_name}`}
                        </td>

                        <td>
                            {student.groupName}
                        </td>
                    </tr>

                ))}
            </table>

        </div>
    );
};

export default Students;
