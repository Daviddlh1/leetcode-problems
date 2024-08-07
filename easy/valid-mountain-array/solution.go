package main

func validMountainArray(arr []int) bool {
	climb := 0
	n := len(arr)

	if len(arr) < 3 {
		return false
	}

	for climb < n-1 && arr[climb] < arr[climb+1] {
		climb = climb + 1
	}

	if climb == 0 || climb == n-1 {
		return false
	}

	for climb < n-1 && arr[climb] > arr[climb+1] {
		climb = climb + 1
	}

	if climb == n-1 {
		return true
	} else {
		return false
	}
}
