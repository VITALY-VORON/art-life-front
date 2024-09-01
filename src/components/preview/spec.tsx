const Spec = () => {
  return (
    <div className="flex flex-col p-24 gap-5">
      <span
        style={{
          fontWeight: 400,
          fontSize: 24,
        }}
      >
        Специализация
      </span>
      <span
        style={{
          fontWeight: 700,
          fontSize: 80,
        }}
      >
        Специализируемся
        <p>на шаблонах приложений</p> <p>для Android​</p>
      </span>
      <span
        style={{
          fontWeight: 700,
          fontSize: 48,
        }}
      >
        Наши ценности:
      </span>
      <div className="flex justify-between">
        <div className="flex flex-col">
          <span
            style={{
              fontWeight: 600,
              fontSize: 24,
            }}
          >
            Инновации и творчество
          </span>
          <span
            style={{
              fontWeight: 400,
              fontSize: 20,
            }}
          >
            Мы ценим инновации и креативность и{" "}
            <p>стремимся разрабатывать шаблоны приложений,</p>{" "}
            <p>которые одновременно привлекательны и</p>{" "}
            <p>удобны для пользователя</p>
          </span>
        </div>
        <div className="flex flex-col">
          <span
            style={{
              fontWeight: 600,
              fontSize: 24,
            }}
          >
            Простота и удобство использования​
          </span>
          <span
            style={{
              fontWeight: 400,
              fontSize: 20,
            }}
          >
            Мы верим в простоту и удобство использования{" "}
            <p>и стремимся сделать разработку мобильных</p>{" "}
            <p>приложений доступной каждому.</p>{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Spec;
