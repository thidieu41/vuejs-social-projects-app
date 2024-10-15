import { ref } from "vue";

export function useFetchData(url: string) {
  const data = ref(null);
  const error = ref(null);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      data.value = await response.json();
    } catch (err: any) {
      error.value = err.message;
    }
  };

  fetchData();

  return { data, error };
}

// import { useFetchData } from './useFetchData';

// const { data, error } = useFetchData('https://api.example.com/data');
