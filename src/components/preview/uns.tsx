const Uns = () => {
  return (
    <div className="flex flex-col p-24 gap-5">
      <span
        style={{
          fontWeight: 700,
          fontSize: 64,
        }}
      >
        Найдите ответы на часто <p>задаваемые вопросы</p>
      </span>
      <div className="flex justify-start items-start bg-[#F3F4F6] p-5">
        <span
          style={{
            fontWeight: 700,
            fontSize: 24,
          }}
        >
          Какие типы мобильных приложений вы разрабатываете?
        </span>
      </div>
      <span
        style={{
          fontWeight: 400,
          fontSize: 24,
        }}
      >
        Мы специализируемся на разработке шаблонов приложений{" "}
        <p>для Android с использованием Kotlin.</p>
      </span>
      <div className="flex justify-start items-start bg-[#F3F4F6] p-5">
        <span
          style={{
            fontWeight: 700,
            fontSize: 24,
          }}
        >
          Вы предлагаете приложения без кода?
        </span>
      </div>
      <span
        style={{
          fontWeight: 400,
          fontSize: 24,
        }}
      >
        Да, мы предлагаем приложения без кода, используя нашу{" "}
        <p>собственную платформу для создания приложений. Это</p>{" "}
        <p>позволяет вам создавать и настраивать собственное</p>{" "}
        <p>мобильное приложение без какого-либо опыта</p>{" "}
        <p>программирования.</p>
      </span>
    </div>
  );
};

export default Uns;
