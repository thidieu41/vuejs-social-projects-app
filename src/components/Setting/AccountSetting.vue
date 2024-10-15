<template>
  <div class="flex flex-col gap-5 md:mt-2 mt-4">
    <div class="account-content">
      <div>
        <p class="font-bold">Email Adress</p>
        <p class="mt-1 text-sm text-gray-400">there@gmail.it</p>
      </div>
      <button>Change email</button>
    </div>
    <hr class="border-t-2 border-dotted border-gray-500 my-4" />
    <div class="account-content">
      <div>
        <p class="font-bold">Password</p>
        <p>**************</p>
      </div>
      <button>Change password</button>
    </div>
    <hr class="border-t-2 border-dotted border-gray-500 my-4" />
    <div class="text-left account-content bg-gray-700 p-5 rounded-lg">
      <div class="flex flex-col gap-2">
        <div class="flex items-center gap-2">
          <img src="/images/secure.svg" class="h-[30px]" />
          <p class="font-bold">Secure your account</p>
        </div>

        <p class="mx-10 text-sm">
          Two-facor authentication adds to extra layer of security of your
          account. To login , in addition you will need to provide a 6 digit
          code
        </p>
      </div>
      <button>Enable</button>
    </div>
  </div>
</template>
<style scoped>
.account-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
}

.account-content button {
  border: 1px solid #fffd02;
  padding: 8px 20px;
  border-radius: 6px;
  color: #fffd02;
  min-width: 20%;
}
</style>
