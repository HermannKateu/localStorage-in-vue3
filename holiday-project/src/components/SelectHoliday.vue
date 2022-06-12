<template>
    <div class="w-full flex flex-col gap-y-1 font-WorkSans text-base">
        <label for="select" class="text-gray-300">
            Type
        </label>
        <select name="select" id="select" class="outline-none w-full my-1  h-12 px-3 text-gray-500 border border-gray-200 
            bg-gray-100 rounded-md" placeholder="Choose your holiday’s type...">
            <option value="">Choose your holiday's type..</option>
            <option value="Annual" class="option">Annual</option>
            <option value="Martenite">Martenite</option>
            <option value="Absence">Absence</option>
            <option value="Absence">Absence</option>
        </select>
    </div>
</template>

<script setup></script>

<style scoped>
option{
   font-size: 18px;
   color: rgb(165, 160, 160);
}
option:hover {
   background-color: rgb(191, 191, 191);
}
</style>