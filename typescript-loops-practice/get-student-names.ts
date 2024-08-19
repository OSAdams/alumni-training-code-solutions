/* exported getStudentNames */

const getStudentNames = (students: any[]): string[] => {
  const result: string[] = [];
  for (const i of students) {
    result.push(i.name);
  }
  return result;
};
