export default function personReducer(person, action) {
  switch (action.type) {
    case 'update': {
      const { prevName, current } = action;

      return {
        ...person,
        mentors: person.mentors.map((m) => {
          if (m.name === prevName) {
            return { ...m, name: current };
          }
          return m;
        }),
      };
    }

    case 'added': {
      const { name, title } = action;

      return {
        ...person,
        mentors: [...person.mentors, { name, title }],
      };
    }

    case 'delete': {
      const { name } = action;

      return {
        ...person,
        mentors: person.mentors.filter((m) => m.name !== name),
      };
    }

    default: {
      throw Error(`알 수 없는 에러 입니다. ${action.type}`);
    }
  }
}
