import { IResolvers } from "graphql-tools";
import { database } from "../data/data.store";

const query: IResolvers = {
  Query: {
    estudiantes(): any {
      return database.students;
    },
    estudiante(__: void, { id }): any {
      return database.students.filter((student) => student.id === id)[0];
    },
    cursos(): any {
      return database.courses;
    },
    curso(__: void, { id }): any {
      return database.courses.filter((course) => course.id === id)[0];
    },
  },
};

export default query;
