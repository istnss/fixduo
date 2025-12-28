export default function Depoimentos() {
  return (
    <div className="my-10 py-8 px-2" >
      <div className="max-w-7xl mx-auto ">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800"> O que nossos clientes dizem</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-gray-700 px-4">
          <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center">
            <img
              src="/user1.png"
              alt="Foto de usuário"
              className="w-20 h-20 rounded-full object-cover mb-4" />
            <div className="flex justify-center mb-3">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.457a1 1 0 00-.364 1.118l1.286 3.97c.3.921-.755 1.688-1.54 1.118L10 14.347l-3.381 2.456c-.784.57-1.838-.197-1.539-1.118l1.286-3.97a1 1 0 00-.364-1.118L2.622 9.397c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.97z" />
                </svg>
              ))}
            </div>
            <p className="text-sm mb-4">
              “Resolveu rapidamento o problema com o encanamento da lavanderia. Atendimento rápido e preço justo”
            </p>
            <h3 className="font-semibold text-gray-900">Guilherme Santos</h3>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center">
            <img
              src="/user2.png"
              alt="Foto de usuário"
              className="w-20 h-20 rounded-full object-cover mb-4" />
            <div className="flex justify-center mb-3">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.457a1 1 0 00-.364 1.118l1.286 3.97c.3.921-.755 1.688-1.54 1.118L10 14.347l-3.381 2.456c-.784.57-1.838-.197-1.539-1.118l1.286-3.97a1 1 0 00-.364-1.118L2.622 9.397c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.97z" />
                </svg>
              ))}
            </div>
            <p className="text-sm mb-4">
              “Excelente atendimento! Resolveu o problema com o meu varal e o vazamento que estava tendo no banheiro”
            </p>
            <h3 className="font-semibold text-gray-900">Mariana Silva</h3>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center">
            <img
              src="/user3.png"
              alt="Foto de usuário"
              className="w-20 h-20 rounded-full object-cover mb-4" />
            <div className="flex justify-center mb-3">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.457a1 1 0 00-.364 1.118l1.286 3.97c.3.921-.755 1.688-1.54 1.118L10 14.347l-3.381 2.456c-.784.57-1.838-.197-1.539-1.118l1.286-3.97a1 1 0 00-.364-1.118L2.622 9.397c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.97z" />
                </svg>
              ))}
            </div>
            <p className="text-sm mb-4">
              “O profissional foi super pontual e resolveu o problema rapidamente. Resolveu o vazamentos da pia da cozinha de forma eficiente.
              Recomendo demais.”
            </p>
            <h3 className="font-semibold text-gray-900">Isabela de Oliveira</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
