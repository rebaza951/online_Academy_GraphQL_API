import { IResolvers } from "graphql-tools";
import { database } from "../data/data.store";
import _ from "lodash";
const type: IResolvers = {
  Estudiante: {
    courses: (parent) => {
      const cursosLista: Array<any> = [];
      parent.courses.map((course: String) => {
        cursosLista.push(_.filter(database.courses, ["id", course])[0]);
      });
      return cursosLista;
    },
  },
  Curso: {
    students: (parent) => {
      return database.students.filter((student) => {
        return (
          student.courses.filter((course) => course == parent.id).length > 0
        );
      });
    },
  },
};

export default type;
