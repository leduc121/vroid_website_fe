/**
 * AI Studio API Service
 * Handles all API calls related to AI texture generation
 */

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001/api';

// TypeScript types matching backend DTOs
export interface GenerateTextureRequest {
    prompt: string;
    stylePreset?: 'Anime' | 'Cyberpunk' | 'Kawaii' | 'Gothic';
    category: string;
    subCategory: string;
}

export interface GenerateTextureResponse {
    id: string;
    imageUrl: string;
    metadata: {
        category: string;
        subCategory: string;
        stylePreset?: string;
    };
    createdAt: string;
}

export interface DownloadTextureResponse {
    url: string;
    filename: string;
}

export interface PublishToShopRequest {
    generationId: string;
    title: string;
    description: string;
}

export interface GenerationHistoryItem {
    id: string;
    prompt: string;
    stylePreset?: string;
    category: string;
    subCategory: string;
    imageUrl: string;
    vrmUrl?: string;
    isPublished: boolean;
    createdAt: string;
}

export interface GenerationHistoryResponse {
    data: GenerationHistoryItem[];
    meta: {
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    };
}

/**
 * Get authentication token from localStorage
 */
function getAuthToken(): string | null {
    return localStorage.getItem('token');
}

/**
 * Generate AI texture based on prompt and category
 */
export async function generateTexture(
    request: GenerateTextureRequest
): Promise<GenerateTextureResponse> {
    const token = getAuthToken();
    if (!token) {
        throw new Error('Authentication required. Please login first.');
    }

    const response = await fetch(`${API_BASE_URL}/ai-studio/generate`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(request),
    });

    if (!response.ok) {
        const error = await response.json().catch(() => ({ message: 'Failed to generate texture' }));
        throw new Error(error.message || 'Failed to generate texture');
    }

    return response.json();
}

/**
 * Download generated texture as PNG file
 */
export async function downloadTexture(generationId: string): Promise<void> {
    const token = getAuthToken();
    if (!token) {
        throw new Error('Authentication required. Please login first.');
    }

    const response = await fetch(
        `${API_BASE_URL}/ai-studio/download-texture/${generationId}`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );

    if (!response.ok) {
        const error = await response.json().catch(() => ({ message: 'Failed to download texture' }));
        throw new Error(error.message || 'Failed to download texture');
    }

    // Get the blob from response
    const blob = await response.blob();

    // Extract filename from Content-Disposition header or use default
    const contentDisposition = response.headers.get('Content-Disposition');
    let filename = 'texture.png';
    if (contentDisposition) {
        const filenameMatch = contentDisposition.match(/filename="?(.+)"?/);
        if (filenameMatch) {
            filename = filenameMatch[1];
        }
    }

    // Create download link and trigger download
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();

    // Cleanup
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
}

/**
 * Get user's generation history
 */
export async function getGenerationHistory(
    page: number = 1,
    limit: number = 20
): Promise<GenerationHistoryResponse> {
    const token = getAuthToken();
    if (!token) {
        throw new Error('Authentication required. Please login first.');
    }

    const response = await fetch(
        `${API_BASE_URL}/ai-studio/history?page=${page}&limit=${limit}`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );

    if (!response.ok) {
        const error = await response.json().catch(() => ({ message: 'Failed to fetch history' }));
        throw new Error(error.message || 'Failed to fetch history');
    }

    return response.json();
}

/**
 * Publish AI generation to shop as a product
 */
export async function publishToShop(
    request: PublishToShopRequest
): Promise<any> {
    const token = getAuthToken();
    if (!token) {
        throw new Error('Authentication required. Please login first.');
    }

    const response = await fetch(`${API_BASE_URL}/ai-studio/publish`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(request),
    });

    if (!response.ok) {
        const error = await response.json().catch(() => ({ message: 'Failed to publish to shop' }));
        throw new Error(error.message || 'Failed to publish to shop');
    }

    return response.json();
}

/**
 * Generate and download VRM file with applied AI texture
 * @param generationId - ID of the AI generation
 * @param baseCharacter - Male or Female
 */
export async function generateAndDownloadVRM(
    generationId: string,
    baseCharacter: 'Male' | 'Female'
): Promise<void> {
    const token = getAuthToken();
    if (!token) {
        throw new Error('Authentication required. Please login first.');
    }

    const response = await fetch(
        `${API_BASE_URL}/ai-studio/generate-vrm/${generationId}/${baseCharacter}`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );

    if (!response.ok) {
        const error = await response.json().catch(() => ({ message: 'Failed to generate VRM' }));
        throw new Error(error.message || 'Failed to generate VRM');
    }

    // Get the blob from response
    const blob = await response.blob();

    // Extract filename from Content-Disposition header or use default
    const contentDisposition = response.headers.get('Content-Disposition');
    let filename = `${baseCharacter}_AI_Generated.vrm`;
    if (contentDisposition) {
        const filenameMatch = contentDisposition.match(/filename="?(.+)"?/);
        if (filenameMatch) {
            filename = filenameMatch[1];
        }
    }

    // Create download link and trigger download
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();

    // Cleanup
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
}
