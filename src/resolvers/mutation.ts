import { IResolvers } from "graphql-tools";
import { database } from "../data/data.store";
import _ from "lodash";

const mutation: IResolvers = {
  Mutation: {
    createCourse(__void, { course }): any {
      const newCourse = {
        id: String(database.courses.length + 1),
        title: course.title,
        description: course.description,
        clases: course.clases,
        time: course.time,
        logo: course.logo,
        level: course.level,
        path: course.path,
        teacher: course.teacher,
        reviews: [],
      };
      database.courses.push(newCourse);
      return newCourse;
    },
    updateCourse(__void, { course }): any {
      const index = _.findIndex(database.courses, (course_) => {
        return course_.id === course_.id;
      });

      if (index > -1) {
        course.reviews = database.courses[index].reviews; // saving reviews
        database.courses[index] = course;
        return course;
      }

      return {
        id: "-1",
        title: "course not found",
        description: "",
        clases: "",
        time: "",
        logo: "",
        level: "TODOS",
        path: "",
        teacher: "",
        reviews: [],
      };
    },
    deleteCourse(__void, { id }): any {
      const deleted = _.remove(database.courses, (course) => {
        return course.id === id;
      });

      if (deleted[0] === undefined) {
        return {
          id: "-1",
          title: "course not found",
          description: "",
          clases: "",
          time: "",
          logo: "",
          level: "TODOS",
          path: "",
          teacher: "",
          reviews: [],
        };
      }

      return deleted[0];
    },
  },
};

export default mutation;
